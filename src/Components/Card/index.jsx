

function Card () {

    return (

        <div className='bg-white cursor-pointer w-60 h-80 rounded-lg'> 
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-md m-2 px-3 py-0.5'>Men</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448792.jpg?w=740&t=st=1687817003~exp=1687817603~hmac=f9afd596214367e539d36b5000be2cf3cbc6ef32b61822bf00b00b651bd8e105' alt='T-Shirt' />
                <div className='absolute top-0  right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>  
                <span className='text-md font-medium'>T-Shirt</span>
                <span className='text-lg font-bold'>35.000,00 COL$</span>
            </p>
        </div>

    )
}

export default Card