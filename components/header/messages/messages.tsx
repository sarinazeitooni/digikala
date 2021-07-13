import MenuIcon from '@material-ui/icons/Menu';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CategoryIcon from '@material-ui/icons/Category';
import PaymentIcon from '@material-ui/icons/Payment';
import DetailsIcon from '@material-ui/icons/Details';

const messages = {
    inputPlaceHolder: "     جستجو در دیجی‌کالا …",
    signIn: "ورود به حساب کاربری",
    logIn: 'ورود',
    location: 'لطفا شهر و استان خود را انتخاب کنید',
    categoryText: 'همه دسته بندی های',
    navigation: [
        {
            icon: <MenuIcon/>,
            title: 'دسته بندی کالاها',
            categories: true,
            discount: false,
            digi: false,
            categories: [
                {
                    categoryTitle: 'کالای دیجیتال',
                    items: [
                        {
                            itemTitle: 'لوازم جانبی گوشی',
                            itemOption: [
                                'کیف و کاور گوشی',
                                'پاوربانک (شارژر همراه)',
                                'پایه نگهدارنده گوشی',
                            ]
                        },
                        {
                            itemTitle: 'گوشی موبایل',
                            itemOption: [
                                'سامسونگ',
                                'هوآوی',
                                'اپل',
                                'شیايومی',
                                'آنر',
                                'نوکیا',
                            ]
                        },
                        {
                            itemTitle: 'واقعیت مجازی'
                        }, {
                            itemTitle: 'مچ بند و ساعت هوشمند'
                        },{
                            itemTitle: 'هدفون هدست هندزفری'
                        },{
                            itemTitle: 'اسپیکر بلوتوث و با سیم'
                        },
                        {
                            itemTitle: 'دوربین',
                            itemOption: [
                                'دوربین عکاسی دیجیتال',
                                'دوربین ورزشی و فیلم برداری',
                                'دوربین چاپ سریع'
                            ]
                        },
                        {
                            itemTitle: 'لوازم جانبی دوربین',
                            itemOption: [
                                'لنز',
                                'کیف',
                                'کارت حافظه',
                                'کاغذ چاپ عکس'
                            ]
                        },
                        {
                            itemTitle: 'دوربین دوچشمی و شکاری'
                        },
                        {
                            itemTitle: 'تلسکوپ'
                        },
                        {
                            itemTitle: 'پلی استیشن ایکس باکس و بازی'
                        },
                        {
                            itemTitle: 'کامپیوتر و تجهیزات جانبی',
                            itemOption: [
                                'تجهیزات مخصوص بازی',
                                'مانیتور',
                                'کیس های اسمبل شده',
                                'قطعات داخلی کامپیوتر',
                                'ماوس',
                                'کیبورد'
                            ]
                        },
                        {
                            itemTitle: 'لپ تاپ '
                        },
                        {
                            itemTitle: 'لوازم جانبی لپ تاپ',
                            itemOption: [
                                'کیف کوله و کاور',
                                'کابل صدا AUX و HDMI'
                            ]
                        },{
                            itemTitle: 'تبلت'
                        },
                        {
                            itemTitle: 'شارژر تبلت و موبایل'
                        },
                        {
                            itemTitle: 'کیف کاور لوازم جانبی تبلت'
                        },
                        {
                            itemTitle: 'باتری'
                        },{
                            itemTitle: 'دوربین های تحت شبکه'
                        },
                        {
                            itemTitle: 'مودم و تجهیزات شبکه'
                        },
                        {
                            itemTitle: 'ماشین های اداری',
                            itemOption: [
                                'تلفن بی سیم و سانترال',
                                'فکس',
                                'پرینتر',
                                'لوازم جانبی اداری'
                            ]
                        },
                        {
                            itemTitle: 'کتابخوان فیدیبوک'
                        },
                        {
                            itemTitle: 'کارت هدیه خرید از دیجی کالا'
                        },
                    ]
                }, {
                    img: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/88a1496b90a07d6343ad10d3db5c4cb5582c0b88_1619245126.jpg?x-oss-process=image/quality,q_80',
                    categoryTitle: 'خودرو، ابزار و تجهیزات صنعتی'
                }, {

                    categoryTitle: 'مد و پوشاک'
                }, {

                    categoryTitle: 'اسباب بازی، کودک و نوزاد'
                }, {

                    categoryTitle: 'کالاهای سوپرمارکتی'
                }, {

                    categoryTitle: 'زیبایی و سلامت'
                }, {

                    categoryTitle: 'خانه و آشپزخانه'
                }, {

                    categoryTitle: 'کتاب، لوازم تحریر و هنر'
                }, {

                    categoryTitle: 'ورزش و سفر'
                }, {
                    categoryTitle: 'محصولات بومی و محلی'
                },
            ]
        },
        {
            icon: <StorefrontIcon/>,
            title: 'سوپرمارکت',
            categories: false,
            discount: false,
            digi: false
        },
        {
            icon: <MoneyOffIcon/>,
            title: 'تخفیف ها و پیشنهادها',
            categories: false,
            discount: true,
            digi: false
        },
        {
            icon: <CheckCircleOutlineIcon/>,
            title: 'دیجی کالای من',
            categories: false,
            discount: true,
            digi: false
        },
        {
            icon: <CategoryIcon/>,
            title: 'دیجی پلاس',
            categories: false,
            discount: false,
            digi: true,
            digiComponent: {
                url: 'https://www.digikala.com/static/files/38492329.jpg',
                menu: false,
                titleImage: 'https://www.digikala.com/static/files/4a2895fc.svg',
                width: '648px'
            }
        },
        {
            icon: <DetailsIcon/>,
            title: 'دیجی کلاب',
            categories: false,
            discount: false,
            digi: true,
            digiComponent: {
                url: 'https://dkstatics-public.digikala.com/digiclub/53aa31f81138fd588df842086e152102979a00d7_1601458094.jpg',
                titleImage: 'https://www.digikala.com/static/files/1c93eb76.svg',
                width: '718px',
                menu: true,
                menuItem: [
                    'صفحه اصلی دیجی کلاب'
                ]
            }
        },
        {
            icon: <PaymentIcon/>,
            title: 'دیجی پی',
            categories: false,
            discount: false,
            digi: true,
            digiComponent: {
                url: 'https://www.digikala.com/static/files/148f56c6.png',
                menu: true,
                width: '586px',
                menuItem: [
                    'فعالسازی کیف پول',
                    'صفحه اصلی دیجی پی',
                    'خرید شارژ',
                    'خرید بسته اینترنت',
                    'پرداخت قبض'
                ]
            }
        },
        {
            title: 'سوالی دارید؟',
            categories: false,
            discount: false,
            digi: false
        },
        {
            title: 'فروشنده  شوید',
            categories: false,
            discount: false,
            digi: false
        }
    ]
};
export default messages;