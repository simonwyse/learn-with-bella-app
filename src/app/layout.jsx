import { Lilita_One } from 'next/font/google'

// import '../index.css'

export const metadata = {
    title: 'Learn with Bella App',
    description: 'Learning maths game'
}

const lilitaOne = Lilita_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lilita-one'
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${lilitaOne.variable}`}>
            <body className="font-sans">
                <div id="root">{children}</div>
            </body>
        </html>
    )
}