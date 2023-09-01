import Image from "next/image"

export const Banner = () => {
  return (
    <div className="flex items-center justify-start">

        <section className="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 relative pb-4 md:pb-8 lg:pb-12">
        
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">DISTRICT 1A.</h1>
        
        <span className="inline-block max-w-[750px] text-lg text-muted-foreground sm:text-xl" data-br=":r8:" data-brr="1">Ye are all the children of light, and the children of the day: we are not of the night, nor of darkness. Wherefore comfort yourselves together, and edify one another, even as also ye do. 1 Thess 5: 5,11</span>
        </section>

    </div>
  )
}



