import Head from 'next/head';
import Link from 'next/link';

const fund = ({ fund }) => {
    return (
        <>
            <Head>
                <title>{fund.name} | ...</title>
                <meta name='keywords' content='' />
                <meta name='description' content='' />
            </Head>
            <div>
                <div className="cz_flex">
                    <h1 >{fund.name}</h1>
                    <div className="button"><Link className="app-button__link" href="/funds">Back</Link></div>
                </div>
            </div>
        </>
    )
}

export default fund;

// retrn path
export async function getStaticPaths() {
    const req = await fetch('http://127.0.0.1:8000/api/funds');
    const data = await req.json(); // returned an object. if returned array directory, can use funds = req.json()

    const paths = data.funds.map(fund => {
        return {
            params: { id: fund.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }

}

// return content
export async function getStaticProps(context) {
    const id = context.params.id;
    console.log(id);
    const req = await fetch('http://127.0.0.1:8000/api/funds');
    const data = await req.json();
    const funds = data.funds;

    // filer data
    const fund = funds.find((item) => {
        return item.id == id
    })

    return {
        props: { fund }
    }
}

