import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
    title: "Sahil Kalkal",
    description: "A web developer making websites since 2020. Expertise in HTML, CSS, JavaScript, React JS, Next JS and Google Firebase.",
};

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Meta tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Hey, I am Sahil Kalkal, a web developer making websites since 2020. Expertise in HTML, CSS, JavaScript, React JS, Next JS and Google Firebase." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
