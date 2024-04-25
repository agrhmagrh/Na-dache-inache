import OffersBlock from "../../HomeSections/OffersBlock";

export default function Production() {
    return (
        <section className="flex flex-col">
            <div className="apologies p-10 max-w-screen-xl m-auto font-medium text-4xl">
                Пока что наше производство находится в стадии настройки, но мы уже можем предложить вам уникальные решения
            </div>
            <OffersBlock></OffersBlock>
        </section>
    )
}