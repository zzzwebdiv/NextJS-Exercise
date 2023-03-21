import Link from "next/link";
import Head from "next/head";

const Funds = ({ funds }) => {
    return (
        <div>
            <Head>
                <title>Funds | ...</title>
                <meta name='keywords' content='' />
                <meta name='description' content='' />
            </Head>
            <div>
                {
                    funds.map(fund => (<div key={fund.id}>
                        <div className="cz_flex">
                            <h1 >{fund.name}</h1>
                            <div className="button"><Link className="app-button__link" href={`funds/${fund.id}`}>View</Link></div>
                        </div>
                    </div>
                    )
                    )
                }
            </div>
        </div>

    );
};

export default Funds;

export async function getStaticProps() {

    const req = await fetch('http://127.0.0.1:8000/api/funds');
    const data = await req.json();
    const funds = data.funds;
    // console.log(funds);
    // const fund = {'id':2,'title':'this the title'};
    return {
        props: { funds }
    }
}