import style from './style/footer-download.module.scss';
import { v4 as uuidv4 } from 'uuid';
import messages from "./messages/messages";

const FooterDownloads = () => {
    return (
        <div className={style['footer-download-container']}>
            <div className={style['footer-download']}>
                <div className={style['download-title-container']}>
                    <div className={style['label']}>{messages.downloadTitle}</div>
                    <img src='https://www.digikala.com/static/files/59d36e01.svg'/>
                </div>
                <div className={style['downloads']}>
                    <div className={style['download-more']}> ... </div>
                    <div className={style['more-items']}>
                        {messages.urls.map((url)=>{
                            return(
                                <div key={uuidv4()} style={{background: `url("${url}")`}} className={style['download-item']}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterDownloads;