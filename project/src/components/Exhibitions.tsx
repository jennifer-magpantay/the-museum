import { useState, useEffect } from "react";

import { Card } from "./Card";
import { Carousel } from "./Carousel";
import { GalleryContainer } from "./GalleryContainer";

// data
import { data } from "../data/data";

// types
import { DataType } from "../data/data";

// helpers
import { api } from "../helpers/api";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";
import { formatDate } from "../helpers/formatDate";

type ImagesType = {
  src: string;
};

/*
  TODO:
  - fix type error on image: string | Promise<any>
  - refactor code: taking aside the logic, as much is possible
 */

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
        date: formatDate(item.date),
      };
      return newEventsList;
    });
    // set to the a new state
    setEvents(list);
    // call function to render the firt group of images
    sliceEventsGroup(list, 0, numberOfEventsPerPage);
  }, []);

  // handle functions
  function handleGalleryContent(id: string) {
    // change state
    setIsContentExpanded(!isContentExpanded);
    getElementID(id);
  }

  function handleLoadMore() {
    sliceEventsGroup(events, 0, nextEventsToSHow + numberOfEventsPerPage);
    setNextEventsToShow(nextEventsToSHow + numberOfEventsPerPage);
  }

  // helpers functions
  function getElementID(id: string) {
    // check if ID is an even or odd number
    if (Number(id) % 2 === 0) {
      // if is an odd number, recalculate it to the previous number id
      const prevId = Number(id) - 1;
      // with the prevous ID, get the elements
      return getElements(String(prevId));
    }
    return getElements(id);
  }

  function getElements(id: string) {
    const group = document.getElementById(`group-${id}`);
    const gallery = document.getElementById(`gallery-${id}`);
    const groupContent = document.getElementById(`group-content-${id}`);
    setElementsClasses(group, gallery, groupContent);
  }

  function setElementsClasses(
    group: HTMLElement | null,
    gallery: HTMLElement | null,
    groupContent: HTMLElement | null
  ) {
    const button = document.getElementById("gallery-button-close-js");
    if (!isContentExpanded) {
      // add the classes that will make the animations and change aria
      group?.classList.add("group-expand");
      gallery?.classList.add("expand");
      gallery?.setAttribute("aria-hidden", "false");
      button?.setAttribute("aria-expanded", "true");
      groupContent?.classList.add("move-down");
    } else {
      // remove and reset the component's classes
      group?.classList.remove("group-expand");
      group?.classList.add("group-close");
      removeClassAfterAnimation(group, "group-close");

      gallery?.classList.remove("expand");
      gallery?.classList.add("close");
      gallery?.setAttribute("aria-hidden", "true");
      button?.setAttribute("aria-expanded", "true");
      removeClassAfterAnimation(gallery, "close");

      groupContent?.classList.remove("move-down");
      groupContent?.classList.add("move-up");
      removeClassAfterAnimation(groupContent, "move-up");
    }
  }

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

  function removeClassAfterAnimation(reference: any, classname: string) {
    reference?.addEventListener(
      "animationend",
      () => {
        reference?.classList.remove(classname);
      },
      { once: true }
    );
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
        {/* Render list */}
        {eventsPerPage.map((item: DataType, index: number) => {
          if (index % 2 === 0) {
            const nextElement = getNextElement(events, index);
            return (
              <div className="group" key={item.id} id={`group-${item.id}`}>
                <GalleryContainer
                  id={`gallery-${item.id}`}
                  onClick={() => handleGalleryContent(String(item.id))}
                >
                  <Carousel />
                </GalleryContainer>

                <div className="group--content" id={`group-content-${item.id}`}>
                  <>
                    <Card
                      key={item.id}
                      id={String(item.id)}
                      image={item.image}
                      title={item.title}
                      date={item.date}
                      onClick={() => handleGalleryContent(String(item.id))}
                    />

                    {nextElement.map((item: any) => (
                      <Card
                        key={item.id}
                        id={String(item.id)}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                        onClick={() => handleGalleryContent(String(item.id))}
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
