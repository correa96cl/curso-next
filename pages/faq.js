import Link from '../src/components/Link'
import Footer from '../src/components/patterns/Footer'
import React from 'react'


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

export default function FAQPage() {
    return (
        <div>
            <Title as="h2">FQA</Title>
            <Link href="/">FAQ</Link>
            <Footer/>
        </div>
    )
}