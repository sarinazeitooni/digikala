import MenuIcon from '@material-ui/icons/Menu';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CategoryIcon from '@material-ui/icons/Category';
import PaymentIcon from '@material-ui/icons/Payment';
const messages = {
    inputPlaceHolder : "     جستجو در دیجی‌کالا …",
    signIn : "ورود به حساب کاربری",
    logIn : 'ورود',
    location : 'لطفا شهر و استان خود را انتخاب کنید',
    navigation : [
        {
            icon : <MenuIcon/>,
            title : 'دسته بندی کالاها',
            categories : true ,
            discount : false ,
            digi : false

        },
        {   icon : <StorefrontIcon/>,
            title : 'سوپرمارکت',
            categories : false ,
            discount : false ,
            digi : false
        },
        {   icon : <MoneyOffIcon/>,
            title : 'تخفیف ها و پیشنهادها',
            categories : false ,
            discount : true ,
            digi : false
        },
        {   icon : <CheckCircleOutlineIcon/>,
            title : 'دیجی کالای من',
            categories : false ,
            discount : true ,
            digi : false
        },
        {   icon : <CategoryIcon/>,
            title : 'دیجی پلاس',
            categories : false ,
            discount : false ,
            digi : true,
            digiComponent : {
                url : 'https://www.digikala.com/static/files/38492329.jpg',
                menu : false,
                titleImage : 'https://www.digikala.com/static/files/4a2895fc.svg',
                width : '648px'
            }
        },
        {   icon : '',
            title : 'دیجی کلاب',
            categories : false ,
            discount : false ,
            digi : true,
            digiComponent : {
                url : 'https://dkstatics-public.digikala.com/digiclub/53aa31f81138fd588df842086e152102979a00d7_1601458094.jpg',
                titleImage : 'https://www.digikala.com/static/files/1c93eb76.svg',
                width : '718px',
                menu : true,
                menuItem : [
                    'صفحه اصلی دیجی کلاب'
                ]
            }
        },
        {   icon : PaymentIcon,
            title : 'دیجی پی',
            categories : false ,
            discount : false ,
            digi : true,
            digiComponent : {
                url : 'https://www.digikala.com/static/files/148f56c6.png',
                menu : true,
                width : '586px',
                menuItem : [
                    'فعالسازی کیف پول',
                    'صفحه اصلی دیجی پی',
                    'خرید شارژ',
                    'خرید بسته اینترنت',
                    'پرداخت قبض'
                ]
            }
        },
        {
            title : 'سوالی دارید؟',
            categories : false ,
            discount : false ,
            digi : false
        },
        {
            title : 'فروشنده  شوید',
            categories : false ,
            discount : false ,
            digi : false
        }
    ]
};
export default messages;