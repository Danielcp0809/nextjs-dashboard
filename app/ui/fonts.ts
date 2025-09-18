import { Lusitana, Montserrat } from 'next/font/google' // allow to import any font of google fonts 

export const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export const lusitana = Lusitana({ weight: ['400', '700'], subsets:['latin']})