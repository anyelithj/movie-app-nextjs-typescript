import MuiModal from "@mui/material/Modal"
import { modalState } from "../atom/ModaAtoml"
import {useRecoilState} from "recoil"
import { HiX } from "react-icons/hi"
import { Movie } from "../typings"
import { useEffect, useState } from "react"

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useState<Movie | null>(null)
    const [data, setData] = useState()
    
    console.log(movie)
  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.API_KEY
        }&language=en-US&append_to_response=videos`//nos devuelve los videos
      )
        .then((response) => response.json())
        
        .catch((err) => console.log(err.message))
    }

    fetchMovie()
  }, [movie])
  console.log(data)
    const handleClose = () => {
        setShowModal(false)
    }
    return(
        <MuiModal open={showModal} onClose={handleClose}>
            <>
                <button onClick={handleClose} className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]">
                    <HiX className="h-6 w-6"/>
                </button>
            </>
        </MuiModal>
    )
}

export default Modal