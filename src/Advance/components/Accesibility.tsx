import React from "react";

const Accesibility = () => {
    return (
        <>
            <header>
                <nav></nav>
            </header>

            <main>
                <section className="hero">
                    <h1>Judul...</h1>
                </section>

                <section className="features">
                    <article>Card1</article>
                    <article>Card2</article>
                    <article>Card3</article>
                </section>

                <section className="pricing">
                    <button aria-label="close">❌</button> {/* memberi tahu bahwa fungsi tombol adalah close*/}
                    <span aria-hidden='true'>⭐⭐⭐⭐⭐</span> {/* memberi tahu ini tidak perlu dibaca screen reader*/}
                </section>

                <section className="faq"></section>
            </main>

            <footer></footer>
        </>
    );
};

export default Accesibility;
