import { PlaylistType } from "@/types/playlist";
import styles from "./Filter.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";
import { FiltersState } from "@/store/features/filtersSlice";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

type FilterProps = {
  tracks: PlaylistType[];
  filters: {
    genres: string[];
    authors: string[];
    sortOption: string;
  };
  onFilterUpdate: (newFilters: Partial<FiltersState>) => void;
};

const Filter = ({ tracks, filters, onFilterUpdate }: FilterProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilter = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
    // You can update the filters state here if needed
    // For example:
    onFilterUpdate({ sortOption: filterName });
  };

  const filterItems = [
    {
      title: "исполнителю",
      key: "author",
      list: getUniqueValues(tracks, "author"),
    },
    {
      title: "году выпуска",
      key: "year",
      list: SORT_OPTIONS,
    },
    {
      title: "жанру",
      key: "genre",
      list: getUniqueValues(tracks, "genre"),
    },
  ];

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filterItems.map((filter) => (
        <FilterItem
          key={filter.title}
          title={filter.title}
          isActive={activeFilter === filter.title}
          list={filter.list}
          handleFilter={() => handleFilter(filter.title)}
        />
      ))}
    </div>
  );
};

export default Filter;
