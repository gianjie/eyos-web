import styles from '../../styles/Home.module.css'
import CtaBtn from '../CtaBtn'
import Image from 'next/image'

export default function Home({store, goBack, onClickRow, approve}) {
  console.log(store)
  const {
    STORE_NAME, 
    STORE_ADDRESS,
    STORE_TILL_COUNT,
    STORE_TNC_ACCEPTED_FLAG,
    STORE_TNC_ACCEPTED_DATETIME,
    IS_APPROVED,
    STORE_OWNER_NAME,
    STORE_OWNER_MOBILE,
    STORE_RETAILER_NAME
  } = store;

  const storeInfo = {
    STORE_NAME,
    STORE_ADDRESS,
    STORE_TILL_COUNT,
    STORE_TNC_ACCEPTED_FLAG,
    STORE_TNC_ACCEPTED_DATETIME,
    IS_APPROVED
  }

  const ownerInfo = {
    STORE_RETAILER_NAME,
    STORE_OWNER_MOBILE
  }

  return (
    <div className={styles.storeContainer}>
      <div style={{display:'flex', flexDirection:"row", alignItems:'center', justifyContent:"space-between", flexWrap:'wrap'}}>
        <h4 className={styles.title} style={{marginTop: 0, margin:0, fontWeight: 600}}>{STORE_NAME}</h4>
        <div style={{display:'flex', flexDirection:'row'}}>
          <CtaBtn title={'Go Back'} type={'btnWarning'} style={{width:100, marginRight: 10}} onClick={goBack}/>
          {approve && <CtaBtn title={'Approve'} type={'btnApprove'} style={{width:100, marginRight: 10}} onClick={() => onClickRow(2, {rowData: store})}/>}
          <CtaBtn title={'Reject'} type={'btnReject'} style={{width:100}} onClick={() => onClickRow(1, {rowData: store})}/>
        </div>
      </div>

      <div style={{marginTop: 20, display:'flex', flexWrap:'wrap', justifyContent:"space-between"}}>
        <StoreInfoCard data={storeInfo}/>
        <OwnerInfoCard data={ownerInfo}/>
        <PhotosCard/>
      </div>

    </div>
  )
}

const RenderField = ({title, field}) => (
  <div style={{paddingTop: 5, paddingBottom: 5, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:'100%', flexWrap:"wrap", borderBottom:'1px solid rgb(222, 222, 223, 0.5)'}}>
    <span style={{width:'50%', height: 40, display:"flex", alignItems:"center"}}>
      <h5 style={{fontWeight:400, margin:0, padding:0, fontSize: 12}}>
        {title}
      </h5>
    </span>
    <span style={{width:'50%', height: 40, display:"flex", alignItems:"center"}}>
      <p style={{margin:0, padding:0, fontSize: 12, fontWeight: 600}}>
        {field || "NA"}
      </p>
    </span>
  </div>
)

const StoreInfoCard = ({data: {STORE_NAME, STORE_ADDRESS, STORE_TILL_COUNT, STORE_TNC_ACCEPTED_FLAG}}) => (
  <div className={styles.card} style={{backgroundColor:"white", width: '48%', height: 200, marginRight: 0, justifyContent:'flex-start', padding: 20}}>
    <RenderField title={'Name of Store:'} field={STORE_NAME}/>
    <RenderField title={'Name of Store:'} field={STORE_ADDRESS}/>
    <RenderField title={'No. of Tills'} field={STORE_TILL_COUNT}/>
  </div>
)

const OwnerInfoCard = ({data: {STORE_RETAILER_NAME, STORE_OWNER_MOBILE}}) => (
  <div className={styles.card} style={{backgroundColor:"white", width: '48%', height: 200, marginRight: 0, justifyContent:'flex-start', padding: 20}}>
    <RenderField title={'Owner Name:'} field={STORE_RETAILER_NAME}/>
    <RenderField title={'Owner Mobile:'} field={STORE_OWNER_MOBILE}/>
  </div>
)

const PhotosCard = () => (
  <div className={styles.card} style={{backgroundColor:"white", width: '48%', height: 200, marginRight: 0, justifyContent:'flex-start', padding: 20}}>
    <h4 className={styles.title} style={{marginTop: 0, margin:0, fontWeight: 500}}>Photos</h4>

    <div style={{display:'flex', justifyContent:"flex-start", alignItems:'center', height: 150}}>
      <span style={{borderRadius: 12, overflow:"auto", marginRight: 20}}>
        <Image src="/store-one.jpeg" alt="eyos one logo" width="180" height='120'/>
      </span>
      <span style={{borderRadius: 12, overflow:"auto"}}>
      <Image src="/store-two.jpeg" alt="eyos one logo" width="180" height='120'/>
      </span>
    </div>
   
  </div>
)