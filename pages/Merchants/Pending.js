import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import CtaBtn from '../../components/CtaBtn'
import Loading from '../../components/Loading'

import axios from 'axios';

import { useRouter } from 'next/router'
import { useState  } from 'react';
import { Column, Table } from 'react-virtualized';

export default function Home({records}) {

  const [newRecords, setNewRecords] = useState(records);
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const onApprovalAll = async() => {
    if (window.confirm(`Are you sure you want to approve all ${newRecords.length} stores?`)) {
      setLoading(true);

      const allStoreIDs = []
      newRecords.map(e => allStoreIDs.push(`${e.STORE_ID}`));

      await axios.post(
        `https://tardjf.deta.dev/verify/collection/approve`, 
        allStoreIDs,
        {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
  
      const {data} = await axios.get('https://tardjf.deta.dev/stores')
      const {records} = data
      const filterRecords = records.filter(e => !e.IS_APPROVED && e.STORE_NAME);
  
      setNewRecords(filterRecords);
  
      setLoading(false);
    }
  }

  const editFetchNewRecords = async(STORE_ID, action) =>{
    setLoading(true);

    await axios.patch(`https://tardjf.deta.dev/verify/${STORE_ID}/${action}`);

    const {data} = await axios.get('https://tardjf.deta.dev/stores')
    const {records} = data
    const filterRecords = records.filter(e => !e.IS_APPROVED && e.STORE_NAME);

    setNewRecords(filterRecords);

    setLoading(false);
  };

  const onClickRow = async (idx, {rowIndex, rowData}) => {
    const {STORE_ID, STORE_NAME} = rowData
    if (idx === 0) {
      return
    };

    if(idx === 1){
      if (window.confirm(`Are you sure you wish to reject this Store Name ${STORE_NAME}?`)) {
        editFetchNewRecords(STORE_ID, 'deny');
      }
    } else {
      if (window.confirm(`Are you sure you wish to approve this Store Name ${STORE_NAME}?`)) {
        editFetchNewRecords(STORE_ID, 'approve');
      }
    }
  }

  return (
    <div className={styles.padding}>
      <Head>
        <title>eyos one Pending Approvals</title>
        <meta name="description" content="Generated by a team of passionate individual" />
      </Head>
   
      <div style={{display:'flex', flexDirection:"row", width: 920, justifyContent:"space-between", alignItems:'center', marginBottom:20}}>
        <h4 className={styles.title} style={{marginTop: 0, margin:0}}>{newRecords.length} Stores Pending Approval</h4>
        <CtaBtn title={'Approve All'} type={'btnApprove'} style={{width:120}} onClick={onApprovalAll}/>
      </div>

      <Table
        headerHeight={40}
        width={920}
        height={600}
        rowHeight={40}
        rowGetter={({ index }) => newRecords[index]}
        rowCount={newRecords.length}
        headerStyle={{
          fontWeight: 500,
          color: 'rgb(13, 12, 56)',
          fontSize: 10, backgroundColor:'rgb(240, 240, 240)', margin: 0, 
          height: 40, display:"flex", alignItems:'center', paddingLeft: 10, justifyContent:'flex-start'
        }}
        rowStyle={{borderBottom: '1px solid rgb(222, 222, 223)'}}
      >
        <Column label='Store Name' dataKey='STORE_NAME' width={300} className={styles.columnRow}/>
        <Column label='Total Tills' dataKey='STORE_TILL_COUNT' width={180}className={styles.columnRow}/>
        <Column label='Store Address' dataKey='STORE_ADDRESS' width={400} className={styles.columnRow}/>
        <Column label='Contact Number' dataKey='STORE_OWNER_MOBILE' width={300} className={styles.columnRow}/>

        <Column width={200} dataKey={''} className={styles.columnRow} 
          headerRenderer={() => <div></div>}
          cellRenderer={(e) => (<CtaBtn title={'View'} type={'btnWarning'} onClick={() => onClickRow(0, e)}/>)}
        />

        <Column width={200} dataKey={''} className={styles.columnRow} 
          headerRenderer={() => <div></div>}
          cellRenderer={(e) => (<CtaBtn title={'Reject'} type={'btnReject'}onClick={() => onClickRow(1, e)}/>)}
        />

        <Column width={200} dataKey={''} className={styles.columnRow} 
          headerRenderer={() => <div></div>}
          cellRenderer={(e) => (<CtaBtn title={'Approve'} type={'btnApprove'} onClick={() => onClickRow(2, e)}/>)}
        />
      </Table>
  
      {loading && <Loading />}
    </div>
  )
}


export async function getStaticProps(context) {
  const {data} = await axios.get('https://tardjf.deta.dev/stores')
  const {records} = data
  const filterRecords = records.filter(e => !e.IS_APPROVED && e.STORE_NAME)

  return {
    props: { records: filterRecords }
  }
}