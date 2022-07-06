import { useState, useEffect, useRef } from "react";

import { Card } from "./Card";

// data
import { data } from "../data/data";
import { CardsList } from "./CardsList";

// types
import { DataType } from "../data/data";

// helpers
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";
import { formatDate } from "../helpers/formatDate";
import { api } from "../helpers/api";
import { GalleryContainer } from "./GalleryContainer";
import { Carousel } from "./Carousel";

type ImagesType = {
  src: string;
};

/*
  TODO:
  - fix type error on image: string | Promise<any>
  - refactor code: taking aside the logic, as much is possible
  - refactor data list to add from-to dates
  - build solution to format from-to dates and update states
*/

export const Exhibitions = () => {
  const [events, setEvents] = useState<DataType[]>([]);
  const [eventsPerPage, setEventsPerPage] = useState<DataType[]>([]);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [nextEventsToSHow, setNextEventsToShow] = useState(4);
  const [images, setImages] = useState<ImagesType[]>([]);

  const numberOfEventsPerPage = 4;

  const cardRef = useRef<HTMLDivElement>(null);

  const galleryRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const groupContentRef = useRef<HTMLDivElement>(null);

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

  function getImage(data: ImagesType[], i: number, fallback: string) {
    const sourceList = data.map((item) => item.src);
    const sourceIndex = sourceList[i];
    if (sourceIndex === undefined) {
      return fallback;
    }
    return sourceIndex;
  }

  function sliceEventsGroup(data: any, start: number, end: number) {
    let arrayForHoldingPosts: any = [];
    const slicedEvents = data.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedEvents];
    setEventsPerPage(arrayForHoldingPosts);
  }

  function handleGalleryContent() {
    console.log("clicking");
    // change state
    setIsContentExpanded(!isContentExpanded);
    // isContentExpanded ? add class to run animation : reverse animation and remove class after event
    // same logic for both gallery content and group content
    if (!isContentExpanded) {
      groupContentRef.current?.classList.add("move-down");
      galleryRef.current?.classList.add("expand");
      groupRef.current?.classList.add("group-expand");
    } else {
      groupContentRef.current?.classList.remove("move-down");
      groupContentRef.current?.classList.add("move-up");
      removeClassAfterAnimation(groupContentRef, "move-up");

      galleryRef.current?.classList.remove("expand");
      galleryRef.current?.classList.add("close");
      removeClassAfterAnimation(galleryRef, "close");

      groupRef.current?.classList.remove("group-expand");
      groupRef.current?.classList.add("group-close");
      removeClassAfterAnimation(groupRef, "group-close");
    }
  }

  function removeClassAfterAnimation(reference: any, classname: string) {
    reference.current?.addEventListener(
      "animationend",
      () => {
        reference.current?.classList.remove(classname);
      },
      { once: true }
    );
  }

  function handleLoadMore() {
    sliceEventsGroup(events, 0, nextEventsToSHow + numberOfEventsPerPage);
    setNextEventsToShow(nextEventsToSHow + numberOfEventsPerPage);
  }

  function getNextElement(data: any, index: number) {
    // get the nex element based on the current index
    const nextIndex = index + 1;
    const nextElement = data[nextIndex];
    // then create an array to save the element
    let arr: any = [];
    arr.push(nextElement);
    // return the array to be mapped
    return arr;
  }

  return (
    <section className="section">
      {/* Header and Filters */}
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
        {/* render content */}
        {/* Render list */}
        {eventsPerPage.map((item: DataType, index: number) => {
          if (index % 2 === 0) {
            const nextElement = getNextElement(events, index);
            return (
              <div
                className="group"
                key={item.id}
                id={String(item.id)}
                ref={groupRef}
              >
                <GalleryContainer
                  onClick={handleGalleryContent}
                  ref={galleryRef}
                >
                  <Carousel />
                </GalleryContainer>

                <div className="group--content" ref={groupContentRef}>
                  <>
                    <Card
                      key={item.id}
                      id={String(item.id)}
                      image={item.image}
                      title={item.title}
                      date={item.date}
                      onClick={handleGalleryContent}
                      ref={cardRef}
                    />

                    {nextElement.map((item: any) => (
                      <Card
                        key={item.id}
                        id={String(item.id)}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                        onClick={handleGalleryContent}
                        ref={cardRef}
                      />
                    ))}
                  </>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Load more button */}
      <button
        className="button--load"
        onClick={handleLoadMore}
        disabled={eventsPerPage.length === events.length ? true : false}
      >
        {eventsPerPage.length === events.length
          ? "No more content to show"
          : "Load More"}
      </button>
    </section>
  );
};
