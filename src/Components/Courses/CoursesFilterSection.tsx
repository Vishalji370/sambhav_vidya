import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./CoursesFilterSection.css";
import { FaChevronDown } from "react-icons/fa";
import { openLookingForPopup } from "../LookingForPopup";

const coursesData = [
  {
    id: 1,
    university: "Amity University",
    course: "MBA",
    specialization: "Data Science",
   
    image: "/CourseLogo/11.png",
  },
    {
    id: 2,
    university: "Amity University",
    course: "MBA",
    specialization: "Marketing",
   
    image: "/CourseLogo/11.png",
  },
    {
    id: 3,
    university: "Amity University",
    course: "MCA",
    specialization: "AI & ML",
   
    image: "/CourseLogo/11.png",
  },
    {
    id: 4,
    university: "Amity University",
    course: "BBA",
    specialization: "Data Analytics",
   
    image: "/CourseLogo/11.png",
  },
    {
    id: 5,
    university: "Amity University",
    course: "BCA",
    specialization: "Cloud Security",
   
    image: "/CourseLogo/11.png",
  },
  {
    id: 6,
    university: "Sharda Univesity",
    course: "MBA",
    specialization: "Marketing",
    image: "/CourseLogo/7.png",
  },
    {
    id: 7,
    university: "Sharda Univesity",
    course: "HR",
    specialization: "Marketing",
    image: "/CourseLogo/7.png",
  },
    {
    id: 8,
    university: "Sharda Univesity",
    course: "MCA",
    specialization: "Data Science",
    image: "/CourseLogo/7.png",
  },
    {
    id: 9,
    university: "Sharda Univesity",
    course: "BBA",
    specialization: "General",
    image: "/CourseLogo/7.png",
  },
    {
    id: 10,
    university: "Sharda Univesity",
    course: "BCA",
    specialization: "General",
    image: "/CourseLogo/7.png",
  },
  {
    id: 11,
    university: "LPU University",
    course: "MBA",
    specialization: "Finance",
    image: "/CourseLogo/1.png",
  },
    {
    id: 12,
    university: "LPU University",
    course: "MBA",
    specialization: "Digital Marketing",
    image: "/CourseLogo/1.png",
  },
    {
    id: 13,
    university: "LPU University",
    course: "MCA",
    specialization: "General",
    image: "/CourseLogo/1.png",
  },
    {
    id: 14,
    university: "LPU University",
    course: "BBA",
    specialization: "General",
    image: "/CourseLogo/1.png",
  },
    {
    id: 15,
    university: "LPU University",
    course: "BCA",
    specialization: "General",
    image: "/CourseLogo/1.png",
  },
      {
    id: 16,
    university: "Manipal University",
    course: "MBA",
    specialization: "Finance",
    image: "/CourseLogo/8.png",
  },
      {
    id: 17,
    university: "Manipal University",
    course: "MBA",
    specialization: "Digital Marketing",
    image: "/CourseLogo/8.png",
  },
      {
    id: 18,
    university: "Manipal University",
    course: "MCA",
    specialization: "General",
    image: "/CourseLogo/8.png",
  },
      {
    id: 19,
    university: "Manipal University",
    course: "B.Com",
    specialization: "General",
    image: "/CourseLogo/8.png",
  },
      {
    id: 20,
    university: "Manipal University",
    course: "BA",
    specialization: "General",
    image: "/CourseLogo/8.png",
  },
      {
    id: 21,
    university: "UPES University",
    course: "MBA",
    specialization: "Oil & Gas Management",
    image: "/CourseLogo/3.png",
  },
        {
    id: 22,
    university: "UPES University",
    course: "MBA",
    specialization: "Logistics",
    image: "/CourseLogo/3.png",
  },
        {
    id: 23,
    university: "UPES University",
    course: "BBA",
    specialization: "Operations",
    image: "/CourseLogo/3.png",
  },
        {
    id: 24,
    university: "UPES University",
    course: "BCA",
    specialization: "Cloud Computing",
    image: "/CourseLogo/3.png",
  },
        {
    id: 25,
    university: "UPES University",
    course: "MBA",
    specialization: "Business Analytics",
    image: "/CourseLogo/3.png",
  },
          {
    id: 26,
    university: "Shoolini University",
    course: "MBA",
    specialization: "Marketing",
    image: "/CourseLogo/6.png",
  },
            {
    id: 27,
    university: "Shoolini University",
    course: "MBA",
    specialization: "Finance",
    image: "/CourseLogo/6.png",
  },
            {
    id: 28,
    university: "Shoolini University",
    course: "MCA",
    specialization: "General",
    image: "/CourseLogo/6.png",
  },
            {
    id: 29,
    university: "Shoolini University",
    course: "BBA",
    specialization: "General",
    image: "/CourseLogo/6.png",
  },
            {
    id: 30,
    university: "Shoolini University",
    course: "BCA",
    specialization: "General",
    image: "/CourseLogo/6.png",
  },
              {
    id: 31,
    university: "Manav Rachna University",
    course: "MBA",
    specialization: "Business Analytics",
    image: "/CourseLogo/5.png",
  },
              {
    id: 32,
    university: "Manav Rachna University",
    course: "MCA",
    specialization: "General",
    image: "/CourseLogo/5.png",
  },
                {
    id: 33,
    university: "Manav Rachna University",
    course: "BBA",
    specialization: "General",
    image: "/CourseLogo/5.png",
  },
                {
    id: 34,
    university: "Manav Rachna University",
    course: "BCA",
    specialization: "General",
    image: "/CourseLogo/5.png",
  },
                {
    id: 35,
    university: "Manav Rachna University",
    course: "B.Com",
    specialization: "ACCA",
    image: "/CourseLogo/5.png",
  },
                  {
    id: 36,
    university: "GLA University",
    course: "MBA",
    specialization: "Finance",
    image: "/CourseLogo/9.png",
  },
                    {
    id: 37,
    university: "GLA University",
    course: "MBA",
    specialization: "HR",
    image: "/CourseLogo/9.png",
  },
                    {
    id: 38,
    university: "GLA University",
    course: "MCA",
    specialization: "General",
    image: "/CourseLogo/9.png",
  },
                    {
    id: 39,
    university: "GLA University",
    course: "BBA",
    specialization: "General",
    image: "/CourseLogo/9.png",
  },
                    {
    id: 40,
    university: "GLA University",
    course: "BCA",
    specialization: "General",
    image: "/CourseLogo/9.png",
  },
                    {
    id: 41,
    university: "Chandigarh University",
    course: "MBA",
    specialization: "Business Analytics",
    image: "/CourseLogo/10.png",
  },
                      {
    id: 42,
    university: "Chandigarh University",
    course: "MBA",
    specialization: "Marketing",
    image: "/CourseLogo/10.png",
  },
                      {
    id: 43,
    university: "Chandigarh University",
    course: "BBA",
    specialization: "Enterpreneurship",
    image: "/CourseLogo/10.png",
  },
                      {
    id: 44,
    university: "Chandigarh University",
    course: "BCA",
    specialization: "Data Analytics",
    image: "/CourseLogo/10.png",
  },
                      {
    id: 45,
    university: "Chandigarh University",
    course: "MA",
    specialization: "Economics",
    image: "/CourseLogo/10.png",
  },
                        {
    id: 46,
    university: "Galgotias University",
    course: "MBA",
    specialization: "HR",
    image: "/CourseLogo/4.png",
  },
                          {
    id: 47,
    university: "Galgotias University",
    course: "MBA",
    specialization: "Marketing",
    image: "/CourseLogo/4.png",
  },
                          {
    id: 48,
    university: "Galgotias University",
    course: "MA",
    specialization: "Economics",
    image: "/CourseLogo/4.png",
  },
                          {
    id: 49,
    university: "Galgotias University",
    course: "MCA",
    specialization: "General",
    image: "/CourseLogo/4.png",
  },
                          {
    id: 50,
    university: "Galgotias University",
    course: "M.Com",
    specialization: "General",
    image: "/CourseLogo/4.png",
  },
  

];

const CoursesFilterSection = () => {
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    university: "",
    course: "",
    specialization: "",
    duration: "",
  });

  const [activeDropdown, setActiveDropdown] = useState(null);

  // ✅ URL query param se university filter auto-set
  useEffect(() => {
    const universityFromUrl = searchParams.get("university");
    if (universityFromUrl) {
      setFilters((prev) => ({ ...prev, university: universityFromUrl }));
    }
  }, [searchParams]);

  const handleSelect = (type, value) => {
    setFilters({ ...filters, [type]: value });
    setActiveDropdown(null);
  };

  const uniqueValues = (key) => {
    return [...new Set(coursesData.map((item) => item[key]))];
  };

  const filteredData = coursesData.filter((item) => {
    return (
      (!filters.university || item.university === filters.university) &&
      (!filters.course || item.course === filters.course) &&
      (!filters.specialization || item.specialization === filters.specialization) &&
      (!filters.duration || item.duration === filters.duration)
    );
  });

  return (
    <section id="courses-filter-section">

      {/* LEFT FILTER */}
      <div className="filter-sidebar">
        <h3>Filters</h3>

        {["university", "course", "specialization"].map((type) => (
          <div
            className={`dropdown ${activeDropdown === type ? "dropdown--open" : ""}`}
            key={type}
          >
            <button
              className="dropdown-btn"
              onClick={() => setActiveDropdown(activeDropdown === type ? null : type)}
              aria-expanded={activeDropdown === type}
            >
              <span className="dropdown-btn__label">
                {filters[type] || type.toUpperCase()}
              </span>
              <FaChevronDown className="dropdown-btn__icon" />
            </button>

            {activeDropdown === type && (
              <div className="dropdown-menu">
                {uniqueValues(type).map((value) => (
                  <p key={value} onClick={() => handleSelect(type, value)}>
                    {value}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          className="clear-btn"
          onClick={() => setFilters({ university: "", course: "", specialization: "", duration: "" })}
        >
          Clear All
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="courses-content">
        <h2>Explore Top Programs</h2>

        <div className="courses-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="course-card">
              <img src={item.image} alt="course" />
              <div className="card-content">
                <span className="tag">{item.university}</span>
                <h3>{item.course}</h3>
                <p>{item.specialization}</p>
                <p className="duration">{item.duration}</p>
                <button type="button" className="apply-btn" onClick={() => openLookingForPopup()}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CoursesFilterSection;