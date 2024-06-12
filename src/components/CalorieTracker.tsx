import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from './CalorieDisplay';

type CalorieTrackerProps = {
    activities : Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

    // contadores 
    const caloriesConsumed = useMemo ( ()=> activities.reduce( (total, activity) => activity.category === 1 
        ? total + activity.calories

        : total, 0 ), [activities])
    const caloriesBurned = useMemo ( ()=> activities.reduce( (total, activity) => activity.category === 2 
        ? total + activity.calories
        : total, 0 ), [activities])

    const netCalores = useMemo ( ()=> caloriesConsumed - caloriesBurned ,[activities])

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center ">
            Resumen de Calorías
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 ">

            <CalorieDisplay
                calories={caloriesConsumed}
                text="Consumidas"
            />
            <CalorieDisplay
                calories={netCalores}
                text="Diferencia"
            />
            <CalorieDisplay
                calories={caloriesBurned}
                text="Quemadas"
            />
        </div>

    </>
  )
}
