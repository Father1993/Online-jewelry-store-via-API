import { useState } from 'react'
import ItemList from './components/ItemList/ItemList'
import BackButton from './components/UI/BackButton'
import './App.css'

function App() {
    const [filteredItems, setFilteredItems] = useState(null)

    return (
        <div className="app">
            <header className="app-header">
                <h1>Украшения</h1>
            </header>
            <main className="app-main">
                <ItemList
                    setFilteredItems={setFilteredItems}
                    filteredItems={filteredItems}
                />
            </main>
            <BackButton />
        </div>
    )
}

export default App
