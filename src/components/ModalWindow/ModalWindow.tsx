import React from 'react'

const ModalWindow = () => {
  return (
    
        <form>
            <div className="requie">
                <label htmlFor="">Запрос</label>
                <input 
                  type="text" 
                  className='ban'
                />
            </div>

            <div className="requie">
                <label htmlFor=""><span className='red'>*</span>Название</label>
                <input 
                  type="text" 
                  placeholder='Укажите название'
                />
            </div>

            <div className="requie">
                <label htmlFor="">Сортировать по</label>
                <select>
                  <option value='alpUp'>Алфовиту Верх</option>
                  <option value='alpDown'>Алфовиту Вниз</option>
                  <option value='viewsUp'>По просмотрам Верх</option>
                  <option value='viewsDown'>По просмотрам Вниз</option>
                </select>
            </div>

            <div className="range_grid">
              <div>
                <label htmlFor="">Максимальное количество</label>
                <input 
                  type="range" 
                  className='slider'
                  min="1" 
                  max="25" 
                  step="1" 
                />
              </div> 
              <div className='requie'>
                <input 
                  type="text" 
                />
              </div>  
            </div>

            <div className='button_group'>
                <button type='reset' className='but inversion' >Don't Save</button>
                <button type='submit' className='but' >Save</button>
            </div>
          </form>

  )
}

export default ModalWindow