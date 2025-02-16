import { Link } from "react-router-dom"

function SongItem({ image, name, duration, artist, audio, _id, index }) {
  return (
    <Link to={`/song/${_id}`} className="song-item">
        <div className="song-item__number-album">
            <p>{index + 1}</p>

            <div className="song-item__album">
                <img
                 src={image}
                    alt={`Imagem da música ${name}`}
                 className="song-item__image"
                />

                <p className="song-item__name">{name}</p>
            </div>

        </div>

        <p>{duration}</p>
    </Link>
  )
}

export default SongItem