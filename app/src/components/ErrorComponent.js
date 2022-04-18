function ErrorComponent({error}){
    return(
        <div className="flex flex-col m-4">
            <p className="text-8xl self-center">❗</p>
            <p className="text-2xl self-center mb-4">An error occured:</p>
            <p className="text-red-600">{error.message}</p>
            <p className="text-2xl self-center mt-4">Please check your data an try again later.</p>
        </div>
    )
}

export default ErrorComponent