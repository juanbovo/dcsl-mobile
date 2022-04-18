import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from '../components/SuccessComponent';
import SpinnerComponent from "../components/SpinnerComponent";

function AddEdit(){
    const {id} = useParams()
    const [phone, setPhone] = useState(undefined);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isCalling, setIsCalling] = useState(true);

    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm()

    const fetchData = useCallback(async () => {
        if (!isCalling) {
            try {
                const response = await fetch(`http://localhost:8080/phones/${id}`)
                if (response.status !== 200) {
                    const error  = await response.json()
                    throw Error(error.message.message)
                }
                const phone  = await response.json()
                setPhone(phone);
                setIsLoaded(true);
            } catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        }
        setIsCalling(false);
    }, [id, isCalling])

    useEffect(() => {
        if(id){
            fetchData();
        } else {
            setIsLoaded(true)
        }
    }, [id, fetchData]);

    const redirectToHome = () => setTimeout(()=> {
        navigate('/');  
    }, 3000)


    const onSubmittingData = async (data) => {
        setIsLoaded(false)
        
        try {
            const response = await fetch(`http://localhost:8080/phones/${id?id:''}`, {
                method: id ? 'put' : 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            if (response.status !== (id ? 200 : 201)) {
                const error = await response.json()
                throw Error(error.message.message)
            }
            const successMessage  = await response.json()
            setSuccess(successMessage)
            setIsLoaded(true)
            redirectToHome()
        } catch (error) {
            setError(error);
            setIsLoaded(true)
            redirectToHome()
        }
    };

    return(
        <div className="flex flex-col max-w-4xl mb-auto mx-auto ">
            {!isLoaded ? (
              <SpinnerComponent />
            ) : error ? (
              <ErrorComponent error={error} />
            ) : success ? (
                <SuccessComponent message={`Phone successfully ${!id ? 'added' : 'edited'}!`}/>
            ) : (
              <div className='mt-4 sm:min-w-[640px]'>
              <h2 className='font-semibold text-slate-800 text-2xl'>{!id ? 'Add a new phone' : `Edit ${phone.name}`}</h2>
              <hr className="mt-2"></hr>
              <form className='flex flex-col' onSubmit={handleSubmit(onSubmittingData)}>
                <label  className="block mt-4">Phone Name</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='text' placeholder='Phone Name' defaultValue={phone? phone.name : ''} name="name" {...register("name", {required: true, maxLength: 50})}></input>
                    {errors.name?.type === 'required' && <span className='text-red-400 text-xs'>This field is required.</span>}
                    {errors.name?.type === 'maxLength' && <span className='text-red-400 text-xs'>Max 50 chars.</span>}
                <label  className="block mt-4">Manufacturer</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='text' placeholder='Manufacturer' defaultValue={phone? phone.manufacturer : ''} name="manufacturer" {...register("manufacturer", {required: true, maxLength: 30})}></input>
                    {errors.manufacturer?.type === 'required' && <span className='text-red-400 text-xs'>This field is required.</span>}
                    {errors.manufacturer?.type === 'maxLength' && <span className='text-red-400 text-xs'>Max 30 chars.</span>}
                <label  className="block mt-4">Description</label>
                <textarea className='border w-full h-24 px-3 rounded-md outline-primary-300'
                    type='textarea' placeholder='Description' defaultValue={phone? phone.description : ''} name="description" {...register("description", {maxLength: 250})}></textarea>
                    {errors.description?.type === 'maxLength' && <span className='text-red-400 text-xs'>Max 250 chars.</span>}
                <label  className="block mt-4">Color</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='text' placeholder='Color' defaultValue={phone? phone.color : ''} name="color"{...register("color", {maxLength: 30})}></input>
                    {errors.color?.type === 'maxLength' && <span className='text-red-400 text-xs'>Max 30 chars.</span>}
                <label  className="block mt-4">Price (€)</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='number' placeholder='Price' defaultValue={phone? phone.price : ''} name="price"{...register("price", {required: true})}></input>
                    {errors.price?.type === 'required' && <span className='text-red-400 text-xs'>This field is required.</span>}
                <label  className="block mt-4">Phone Image Link</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='text' placeholder='Image File Path' defaultValue={phone? phone.imageFilePath : ''} name="imageFilePath"{...register("imageFilePath", {required: true, pattern: /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|jpeg|png)/})}></input>
                    {errors.imageFilePath?.type === 'required' && <span className='text-red-400 text-xs'>This field is required.</span>}
                    {errors.imageFilePath?.type === 'pattern' && <span className='text-red-400 text-xs'>Only PNG or JPG images.</span>}
                <label  className="block mt-4">Phone Screen</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='text' placeholder='Screen Size' defaultValue={phone? phone.screen : ''} name="screen"{...register("screen", {maxLength: 20})}></input>
                    {errors.screen?.type === 'maxLength' && <span className='text-red-400 text-xs'>Max 20 chars.</span>}
                <label  className="block mt-4">Storage (GB) </label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='number' placeholder='Storage in GB' defaultValue={phone? phone.storage : ''} name="storage"{...register("storage", {required: true})}></input>
                    {errors.storage?.type === 'required' && <span className='text-red-400 text-xs'>This field is required.</span>}
                <label  className="block mt-4">RAM Memory (GB)</label>
                <input className='border w-full h-10 px-3 rounded-md outline-primary-300'
                    type='number' placeholder='RAM memory in GB' defaultValue={phone? phone.ram : ''} name="ram"{...register("ram", {required: true})}></input>
                    {errors.ram?.type === 'required' && <span className='text-red-400 text-xs'>This field is required.</span>}
                <input className="bg-primary-500 hover:bg-primary-700 text-white text-sm m-2 px-4 py-2 w-24 h-12 border self-center rounded-full hover:border-primary-300 active:transform active:translate-y-1 active:bg-primary-300" type='submit' value='Submit'/>
              </form>
              </div>
            )}
        </div>
    )
}

export default AddEdit