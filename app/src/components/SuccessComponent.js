function SuccessComponent ({message}) {
    return (
    <div className="flex flex-col m-4">
        <p className="text-8xl self-center">✅</p>
        <p className="text-2xl self-center my-4">Success!</p>
        <p className='text-green-600 self-center text-xl'>{ message }</p>
    </div>
    )
}
export default SuccessComponent