"use client";

import Track from "@/components/Track/Track";
import styles from "./Playlist.module.css";
import classNames from "classnames";
import { PlaylistType } from "@/types/playlist";

type PlaylistProps = {
  tracks: PlaylistType[];
};

const Playlist = ({ tracks }: PlaylistProps) => {
  /* const handleTrackClick = (track: PlaylistType) => {
    console.log(`Track clicked: ${track.name}`);
  }; */

  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            // onClick={}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
