import React from 'react'

export default function Home() {
    return (
        <>
            <section class="banner">
                <article class="banner-shape"></article>
                <article class="banner-introduction">
                    <div><span>Find</span> the best mechanics in Egypt
            </div> <i class="fas fa-angle-down angle-down"></i>
                </article>
                <article class="banner-image"></article>
            </section>
            <section class="full-height-container credits">
                <section class="why-us">
                    <section>
                        <img src="./Search.svg" />
                        <h3>Search</h3>
                        <p>Search for Mechanics, plumbers ... etc. in your area</p>
                    </section>
                    <section>
                        <img src="./Mechanic.svg" />
                        <h3>Compare</h3>
                        <p>Compare between mulitple choices and choose what suits you</p>
                    </section>
                    <section>
                        <img src="./Book.svg" />
                        <h3>Book</h3>
                        <p>Book your appointment, with no need to wait</p>
                    </section>
                </section>
                <article class="quick-booking">
                    <h2>Book Now</h2>
                    <div>
                        <select name="sepcialization" id="spec">
                            <option value="blah">sepciality</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                        </select>
                        <select name="district" id="district">
                            <option value="blah">district</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                        </select>

                        <select name="area" id="area">
                            <option value="blah">area</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                        </select>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </article>
            </section>
        </>
    )
}
