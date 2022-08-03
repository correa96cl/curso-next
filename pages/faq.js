import Link from '../src/components/Link'
import Footer from '../src/components/patterns/Footer'
import React, { } from 'react'
import Head from 'next/head'

export async function getServerSideProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    const faq = await fetch(FAQ_API_URL)
        .then((respostaServidor) => {
            return respostaServidor.json();
        })
        .then((resposta) => {
            return resposta;
        })
    return {
        props: {
            faq,
        },
    }
}


function Title({ children, as }) {


    const Tag = as;
    return (

        <React.Fragment>

            <Tag>{children}</Tag>
            <style jsx>{`
        ${Tag} {color: red;}
        
        `}

            </style>
        </React.Fragment>
    )
}

export default function FAQPage({ faq }) {

    return (
        <div>
            <Head>
                <title>Home - Alura</title>
            </Head>
            <Title as="h2">FQA</Title>
            <Link href="/">FAQ</Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                        </article>
                        {answer}
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    )
}