function createData(sold,title,price,hasDiscount,digiPlus,discount,img){
    return {sold,title,price,hasDiscount,digiPlus,discount,img}
}
const data = {
    getAll : "مشاهده همه",
    currency: "تومان",
    countDown : "",
    sold: "فروش رفته",
    cards:[
        createData(5,'کوله پشتی مک کد',224000,true,'',15,"https://dkstatics-public.digikala.com/digikala-products/eebf2487d215991192fe287d54314a6efe601545.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(35,"کتاب تئوری انتخاب اثر ویلیام گلسر",132000,false,"                  ۴,۶۰۰ تومان هدیه نقدی       ",25,"https://dkstatics-public.digikala.com/digikala-products/206430.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(60,'هدفون پاناسونیک مدل RP-HF300',1750000,true,"                  ۲۵,۰۰۰ تومان هدیه نقدی       ",71,"https://dkstatics-public.digikala.com/digikala-products/a6cd150b2e034f9b303675099915a87f812da320_1612098864.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(70,'کابل تبدیل USB  بهmicroUSB  چویتک مدل AB003 طول1.2متر',99000,false,"",49,"https://dkstatics-public.digikala.com/digikala-products/b0693d437214610100dc3486ff2b6867076f8178_1603722059.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(90,'کوله پشتی مک کد',224000,true, "",15,"https://dkstatics-public.digikala.com/digikala-products/eebf2487d215991192fe287d54314a6efe601545.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(30,"کتاب تئوری انتخاب اثر ویلیام گلسر",132000,false,"                  ۴,۶۰۰ تومان هدیه نقدی       ",25,"https://dkstatics-public.digikala.com/digikala-products/206430.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(60,'هدفون پاناسونیک مدل RP-HF300',1750000,true,"                  ۲۵,۰۰۰ تومان هدیه نقدی       ",71,"https://dkstatics-public.digikala.com/digikala-products/a6cd150b2e034f9b303675099915a87f812da320_1612098864.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"),
        createData(70,'کابل تبدیل USB  بهmicroUSB  چویتک مدل AB003 طول1.2متر',99000,false,"",49,"https://dkstatics-public.digikala.com/digikala-products/b0693d437214610100dc3486ff2b6867076f8178_1603722059.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60")
    ]
}
export default data;