import Image from 'next/image'
import FileInput from './components/file-input'

export default function Home() {
return (
    <main>
        <div className='my-12 text-center'>
            <h1 className='text-3xl font-black'>Certificate Generator</h1>
            <p className='mt-4 w-10/12 mx-auto' >A tool generate bulk certificates in the Browser, No upload, No download, No other bullshit</p>
        </div>
        <div>
            <FileInput/>
        </div>
    </main>
)
}
