| Program neve | Tesztelő neve | Dátum | Becsült idő |
| :----------- | :------------ | :---- | :---------- |
| Hirportal    | | | | | | |


| Funkció megnevezése | Előfeltételek | Feladat, tesztlépések | Tesztadatok | Elvárt eredmény | Sikeres | Megjegyzés |
| :-------------------------------- | :-------------- | :-------------------------------- | :------------ | :-------------------------------- | :-------- | :-------------------------------- |
| Backend projekt elindítása         | A projekt klónozása | Visual Studio Code > npm start    | nincs         | A backend projekt elindul         | ✓ / X | |
| Frontend projekt elindítása        | A projekt klónozása | Visual Studio Code > ng serve     | nincs         | A frontend projekt elindul        | ✓ / X | |
| Homepage elérése                   | nincs | Böngésző > localhost:4200         | nincs         | Megjelenik a főoldal              | ✓ / X | |
| Regisztrációs felület megnyitása   | nincs | Navigációs sáv > Regisztráció     | nincs         | Megjelenik a regisztrációs felület| ✓ / X | |
| Regisztráció                       | nincs | Űrlap kitöltése                   | felhasználónév, jelszó | A regisztráció gombra kattintva létrejön a felhasználó, átirányítás megtörténik a hírek oldalára| ✓ / X | |
| Bejelentkezési felület megnyitása  | nincs | Navigációs sáv > Bejelentkezés    | nincs         | Megjelenik a bejelentkezési felület| ✓ / X |                                   |
| Bejelentkezés                      | Regisztráció | Űrlap kitöltése            | felhasználónév, jelszó | A bejelentkezés gombra kattintva végbe megy a bejelentkezés, és átirányítás megtörténik a hírek oldalára| ✓ / X | |                                   |
| Kijelentkezés                      | Bejelentkezés| Navigációs sáv > Kijelentkezés | nincs | A kijelentkezés gombra kattintva megszűnik a session, átirányítás megtörténik a főoldalra| ✓ / X | |
| Hírek elérése                      | Bejelentkezés | Navigációs sáv > Hírek    | nincs | A hírek gombra kattintva megjelenik a híreket tartalmazó felület| ✓ / X | |
| Hír létrehozása                    | Bejelentkezés | Hírek felület > Létrehozás | Hír címe, tartalma | A létrehozás gombra kattintva elmentésre kerül az új hír | ✓ / X | |
| Hír frissítése                     | Bejelentkezés, hír azonosító | Hírek felület > Frissítés | Hír azonosítója, címe, tartalma | A frissítés gombra kattintva frissítésre kerül a megadott azonosítóval rendelkező hír | ✓ / X | |
| Hír törlése                        | Bejelentkezés | Hírek felület > Törlés | Hír azonosítója, felhasználó azonosító | A létrehozás gombra kattintva törlésre kerül a hír, amennyiben az a bejelentkezett felhasználóhoz tartozik | ✓ / X | |
