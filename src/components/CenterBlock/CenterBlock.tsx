import { getPlaylist } from "@/api/playlist";
import styles from "./CenterBlock.module.css"
import Filter from "@/components/Filter/Filter";
import Playlist from "@/components/Playlist/Playlist";
import Search from "@/components/Search/Search";
import { PlaylistType } from "@/types/playlist";

const CenterBlock = async () => {
  let tracks: PlaylistType[] = []
  let error = " "
  try {
    tracks = await getPlaylist()
  } catch (err: unknown) {
    error = err instanceof Error ? "Ошибка при загрузки треков " + err.message : "Неизвестная ошибка"
  }
    return ( <div className={styles.mainCenterblock}>
        <Search/>
        <h2 className={styles.centerblockHeader}>
          Треки
        </h2>
        <Filter/>
        <Playlist tracks={tracks}/>
      </div> );
}
 
export default CenterBlock;