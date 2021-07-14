import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import React from "react";

const messages = {
    links:[
        <InstagramIcon/>,
        <TwitterIcon/>,
        <LinkedInIcon/>,
        <GroupWorkIcon/>
    ],
    columns : [
        {
            social: false,
            title: 'با دیجی کالا',
            items : [
                'اتاق خبر دیجی کلالا',
                'فروش در دیجی کالا',
                'فرصت های شغلی',
                'تماس با دیجی کالا',
                'درباره دیجی کالا'
            ]
        },
        {
            social: false,
            title: 'خدمات مشتریان',
            items : [
                'پاسخ به پرسش های متداول',
                'رویه های بازگرداندن کالا',
                'شرایط استفاده',
                'حریم خصوصی',
                'گزارش باگ'
            ]
        },
        {
            social: false,
            title: 'راهنمای خرید از دیجی کالا',
            items : [
                'نحوه ثبت سفارش',
                'رویه ارسال سفارش',
                'شیوه های پرداخت'
            ]
        },
        {
            social : true,
            title: 'با ما همراه باشید',
            links : 'با ما همراه باشید',
            news : 'از جدیدترین تخفیف ها باخبر شوید',
            email : 'آدرس ایمیل خود را وارد کنید',
            submit : 'ثبت'
        }
    ]
};
export default messages;