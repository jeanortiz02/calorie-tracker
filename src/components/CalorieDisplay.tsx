
type CalorieDisplayProps = {
    calories : number;
    text: string;
}

export default function CalorieDisplay({calories, text} : CalorieDisplayProps) {

    const isConsumed = text === 'Consumidas' ? 'text-lime-600' : text === 'Quemadas' ? 'text-orange-500' : 'text-white' ;

  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                
        <span className={`font-black text-6xl ${isConsumed}`}>{calories}</span>
        {text}
        
    </p>
  )
}
