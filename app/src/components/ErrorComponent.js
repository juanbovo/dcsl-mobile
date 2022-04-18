function ErrorComponent({error}){
    return(
        <div className="flex flex-col">
        <p className="text-red-500">There was an Error: {error.message}</p>
        <p className="text-red-500">Please check your data an try again later.</p>
        </div>
    )
}

export default ErrorComponent