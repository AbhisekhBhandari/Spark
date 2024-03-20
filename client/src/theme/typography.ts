import {DM_Sans} from 'next/font/google';



export const primaryFont = DM_Sans({
    weight:['400', '500', '600', '700', '800', '900'],
    subsets:['latin'],
    display:'swap',
    fallback:['Helvetica', 'Arial', 'sans-serif'],
})