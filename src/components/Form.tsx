import { useState, ChangeEvent } from 'react'
import { categories } from '../data/categories'
import { Activity } from '../types';


export default function Form() {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0,
    })

    const handlechange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        
        const isFieldNumber : boolean = ['calories', 'category'].includes(e.target.id);

        console.log(isFieldNumber)

        setActivity({
            ...activity,
            [e.target.id] : isFieldNumber? +e.target.value : e.target.value
        })
        // console.log(e.target.id);
        // console.log(e.target.value);
    };

  return (
    <form 
        className=" space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className='font-bold'>Categoría</label>
            <select 
                id="category"
                className="border border-slate-300 rounded-lg p-2 w-full bg-white"
                value={activity.category}
                onChange={handlechange}
            >

            { categories.map( category => (
                <option
                    key={category.id}
                    value={category.id}
                >
                    {category.name}
                </option>
            ))}

            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className='font-bold'>Actividad</label>
            <input 
                type="text" 
                id="name"
                className='border border-slate-300 p-2 rounded-lg'
                placeholder='Ex. meal, jugo de naranja, ensalada, ejercicio, pesa, bicicleta'
                value={activity.name}
                onChange={handlechange}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className='font-bold'>Calorias</label>
            <input 
                type="number" 
                id="calories"
                className='border border-slate-300 p-2 rounded-lg'
                placeholder='Calorias, Ex. 300 o 500'
                value={activity.calories}
                onChange={handlechange}
            />
        </div>

        <input 
            type="submit" 
            className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase cursor-pointer text-white'
            value='Guardar comida o ejercicio'
        />
    </form>
  )
}
