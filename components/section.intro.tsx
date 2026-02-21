const SectionIntro = (props: { title: string, description: string }) => {
    return (
        <div className=" mb-6">
            <h1 className=" lg:text-6xl md:text-5xl text-4xl font-bold mb-3">{props.title}</h1>
            <p className=" lg:text-xl md:text-lg text-base text-muted-foreground ">{props.description}</p>
        </div>
    )
}

export default SectionIntro