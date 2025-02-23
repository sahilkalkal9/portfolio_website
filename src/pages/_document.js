import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
    title: "Sahil Kalkal",
    description: "A web developer making websites since 2020. Expertise in HTML, CSS, JavaScript, React JS, Next JS, and Google Firebase.",
};

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Meta tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta 
                    name="description" 
                    content="Hey, I am Sahil Kalkal, a web developer making websites since 2020. Expertise in HTML, CSS, JavaScript, React JS, Next JS, and Google Firebase." 
                />
                <meta 
                    name="keywords" 
                    content="web developer, frontend developer, React JS, Next JS, JavaScript, HTML, CSS, Firebase, UI/UX, website development, SEO, responsive design" 
                />
                <meta name="author" content="Sahil Kalkal" />
                <link rel="icon" href="/himg.jpg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
