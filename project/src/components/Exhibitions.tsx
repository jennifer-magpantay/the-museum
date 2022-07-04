import { useState, useEffect, useRef } from "react";

import { Card } from "./Card";
import { CollapseSection } from "./CollapseSection";
import { Slick } from "./Slick";

// data
import { data } from "../data/data";
import { CardsList } from "./CardsList";

// types
import { DataType } from "../data/data";

// helpers
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";
import { formatDate } from "../helpers/formatDate";
import { api } from "../helpers/api";

type ImagesType = {
  src: string;
};

export const Exhibitions = () => {
  const [events, setEvents] = useState<DataType[]>([]);
  const [eventsPerPage, setEventsPerPage] = useState<DataType[]>([]);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [nextEventsToSHow, setNextEventsToShow] = useState(4);
  const [images, setImages] = useState<ImagesType[]>([]);

  const numberOfEventsPerPage = 4;

  useEffect(() => {
    // set images list from API
    async function setImagesList() {
      // call API
      const response = await api.get("/search?query=museum&per_page=20");
      const imagesList = response.data.photos;
      // save the src into a new list
      const sourceList = imagesList.map((item: any) => {
        const obj: ImagesType = {
          src: item.src.medium,
        };
        return obj;
      });
      // set state
      setImages(sourceList);
    }
    setImagesList();

    //make a data copy with formated fields
    const list = data.map((item, index) => {
      const newEventsList: DataType = {
        id: item.id,
        title: capitalizeFirstLetter(item.title),
        description: capitalizeFirstLetter(item.description),
        image: getImage(images, index, item.image),
        date: capitalizeFirstLetter(formatDate(item.date)),
      };
      return newEventsList;
    });
    // set to the a new state
    setEvents(list);
    // call function to render the firt group of images
    sliceEventsGroup(list, 0, numberOfEventsPerPage);
  }, []);

  function getImage(data: ImagesType[], i: number, callback: string) {
    const sourceList = data.map((item) => item.src);
    const sourceIndex = sourceList[i];
    if (sourceIndex === undefined) {
      return callback;
    }
    return sourceIndex;
  }

  function sliceEventsGroup(data: any, start: number, end: number) {
    let arrayForHoldingPosts: any = [];
    const slicedEvents = data.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedEvents];
    setEventsPerPage(arrayForHoldingPosts);
  }

  function handleExpandContentOnClick() {
    setIsContentExpanded((prevState) => !isContentExpanded);
  }

  function handleLoadMore() {
    sliceEventsGroup(events, 0, nextEventsToSHow + numberOfEventsPerPage);
    setNextEventsToShow(nextEventsToSHow + numberOfEventsPerPage);
  }

  return (
    <section className="section">
      <div className="section--header">
        <h3 className="section--header-title">Title</h3>
        {/* filters */}
        <div className="section--header-filters">
          <div className="filter">
            <label className="filter--label" htmlFor="data">
              Data
            </label>
            <select className="filter--select" name="data" id="data">
              <option className="filter--select-option" value="Tuttle le date">
                Tuttle le date
              </option>
              <option className="filter--select-option" value="Più recente">
                Più recente
              </option>
              <option className="filter--select-option" value="Più antigo">
                Più antigo
              </option>
            </select>
          </div>

          <div className="filter">
            <label className="filter--label" htmlFor="cosa">
              Cosa
            </label>
            <select className="filter--select" name="cosa" id="cosa">
              <option
                className="filter--select-option"
                value="Tutte le attività"
              >
                Tutte le attività
              </option>
              <option
                className="filter--select-option"
                value="Performance e Concerto"
              >
                Performance e Concerto
              </option>
              <option className="filter--select-option" value="Mostra">
                Mostra
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="section--body">
        <Card
          image="https://images.unsplash.com/photo-1563292769-4e05b684851a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwxOXx8bXVzZXVtfGVufDB8MHx8fDE2NTY5MzI0Mjk&ixlib=rb-1.2.1&q=80&w=1080"
          title="Gallery 1"
          date="Apr 17 - Nov 01, 2020"
          onClick={() => handleExpandContentOnClick()}
        ></Card>

        <Card
          image="https://images.unsplash.com/photo-1565060169194-19fabf63012c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDMzNzB8MHwxfHNlYXJjaHwyMHx8bXVzZXVtfGVufDB8MHx8fDE2NTY5MzI0Mjk&ixlib=rb-1.2.1&q=80&w=1080"
          title="Lorem, ipsum dolor."
          date="Apr 17 - Nov 01, 2020"
          onClick={() => handleExpandContentOnClick()}
        ></Card>

        <CardsList data={eventsPerPage} onClick={handleExpandContentOnClick} />
      </div>

      {isContentExpanded && (
        <CollapseSection
          title="Gallery 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit etiam id blandit elementum lectus mauris ut cursus adipiscing. Egestas nam mattis adipiscing velit fermentum et."
          onClick={handleExpandContentOnClick}
        >
          <Slick />
        </CollapseSection>
      )}

      <button
        className="button--load"
        onClick={handleLoadMore}
        disabled={eventsPerPage.length === events.length ? true : false}
      >
        Load More
      </button>
    </section>
  );
};
