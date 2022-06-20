import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./AddGroup.scss";
import { groupContext } from "../../Store/GroupContext/GroupContext";

function AddGroup() {
   
  const {subjectHandle,typeSubjectHandle,statusHandle,priceHandle,teacherHandle,submitHandler} = useContext(groupContext)

  
  return (
    <>
      <div className="add-group add">
        <h4 className="mb-3">Guruh qo'shish</h4>

        <div className="add__group-box">
          <form>
            <div className="d-flex mb-3">
              <div className="w-100">
                <select onChange={subjectHandle}>
                  <option value="none" defaultValue hidden>
                    Fan
                  </option>
                  <option value="Matematika">Matematika</option>
                  <option value="Ona tili">Ona tili</option>
                  <option value="Ingliz tili">Ingliz tili</option>
                </select>
                <p className="add__label">
                  Guruhda o'rgatiladigan fanni tanlang
                </p>
              </div>

              <div className="w-100">
                <select onChange={typeSubjectHandle}>
                  <option value="none" defaultValue hidden>
                    Ta'lim shakli
                  </option>
                  <option value="sanoqli">Sanoqli</option>
                  <option value="oylik">Oylik</option>
                </select>
                <p className="add__label">Guruhning ta'lim shaklini tanlang</p>
              </div>

              <div className="w-100">
                <select onChange={statusHandle}>
                  <option value="none" defaultValue hidden>
                    Holati
                  </option>
                  <option>Aktiv</option>
                  <option>Muzlatilgan</option>
                </select>
                <p className="add__label">Guruh holatini tanlang</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="add__payment">
                <select onChange={priceHandle}>
                  <option value="none" defaultValue hidden>
                    200
                  </option>
                  <option value="150,000">150,000</option>
                  <option value="180,000">180,000</option>
                </select>
                <p className="add__label">
                  Har bir o'quvchi uchun to'lov miqdorini kiriting
                </p>
              </div>

              <div className="add__payment">
                <select onChange={teacherHandle}>
                  <option value="none" defaultValue hidden>
                    Berdiyev Javohir
                  </option>
                  <option value="Valibek Nasimov">Valibek Nasimov</option>
                  <option value="Alisher Xazratov">Alisher Xazratov</option>
                  <option value="Elmurod Toshqulov">Elmurod Toshqulov</option>
                  <option value="Aleksandr Ivanov">Aleksandr Ivanov</option>
                </select>
                <p className="add__label">
                  Guruhga ta'lim beruvchi o'qituvchini tanlang
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Du" />
                <FormControlLabel control={<Checkbox />} label="Se" />
                <FormControlLabel control={<Checkbox />} label="Ch" />
                <FormControlLabel control={<Checkbox />} label="Pa" />
                <FormControlLabel control={<Checkbox />} label="Ju" />
                <FormControlLabel control={<Checkbox />} label="Sh" />
              </FormGroup>

              <div className="d-flex justify-content-end">
                <Link to="/Groups">
                  <Button className="me-3" variant="outlined">
                    Ortga
                  </Button>
                </Link>
                <Link to='/Groups'>
                  <Button onClick={submitHandler} type="submit" variant="contained">
                    Qo'shish
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddGroup;
