import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { usePrevNextButtons } from './usePrevNextButtons'
import { PrevButton, NextButton } from './EmblaCarouselArrowButtons'

// Rest of the component code...



type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}
import { DonationRequestArray } from '@/utils/PatientArray'


const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ])
    const [isPlaying, setIsPlaying] = useState(false)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoplay = emblaApi?.plugins()?.autoplay
            if (!autoplay) return

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi])

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        setIsPlaying(autoplay.isPlaying())
        emblaApi
            .on('autoplay:play', () => setIsPlaying(true))
            .on('autoplay:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {DonationRequestArray.map((index) => (
                        <div
                            key={index.id}
                            className="embla__slide"
                        >
                            <div className="w-full">
                                <img
                                    src={index.image}
                                    alt={`Image for ${index.name}`}
                                    className="w-full md:h-full"
                                />
                            </div>
                            <div className="w-full grid gap-3 md:gap-4 p-2 md:p-4">
                                <div className="">
                                    <div className="flex">
                                        <p className="font-serif">Name: </p>
                                        {index.name}
                                    </div>
                                    <div className="flex">
                                        <p className="fosnt-serif">Age: </p>
                                        {index.age}
                                    </div>
                                    <div className="flex">
                                        <p className="font-serif">Problem: </p>
                                        {index.problem}
                                    </div>
                                    <div className="flex">
                                        <p className="font-serif">Location: </p>
                                        {index.location}
                                    </div>
                                    <div className="flex">
                                        <p className="font-serif">Hospital: </p>
                                        {index.hospital}
                                    </div>
                                    <div className="flex">
                                        <p className="font-serif">Doctor: </p>
                                        {index.doctor}
                                    </div>
                                    <div className="flex">
                                        <p className="font-serif">Date: </p>
                                        {index.date}
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <p className="font-serif">Story :</p>
                                    <p className="pl-4">{index.story}</p>
                                </div>
                            </div>
                            <div className="embla__slide__number">
                                <span>{index.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>
                <button className="embla__play" onClick={toggleAutoplay} type="button">
                    {isPlaying ? 'Stop' : 'Start'}
                </button>
            </div>
        </div >
    )
}

export default EmblaCarousel
