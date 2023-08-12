"use client"
import { ProductsContext } from "@/context/productsContext"
import { useContext } from "react"
import Card from "../Card"
import Slider from "../Slider"

const TopProducts = () => {
    const { products } = useContext(ProductsContext)

    const topProducts = products?.filter((product) => product.rating.rate > 3 && product.rating.count > 300);


    return (
        <section className="topProducts py-20 ">
            <h2 className='text-3xl font-bold capitalize mb-14' title="This section contains products with highest ratings and reviews">Top Rated products</h2>
            <div className="topProducts-cards-container flex  justify-center items-center gap-10">
                <Slider>

                    {topProducts?.map(({ id, title, price, description, rating, image, category }, idx) => {
                        return (
                            <div key={title} className="w-[400px] xs:w-[100vw] shrink-0 xs:shrink-1">
                                <Card priority={idx < 8} link={`/products/${id}`} key={idx} id={id} title={title} price={price} description={description} rating={rating} image={image} category={category} />
                            </div>
                        )
                    })}
                </Slider>

            </div>
        </section>
    )
}

export default TopProducts
