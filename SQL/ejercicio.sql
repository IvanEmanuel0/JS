/*1- SELECT country.Name, countrylanguage.Language FROM country INNER JOIN countrylanguage
ON country.Code = countrylanguage.CountryCode WHERE country.Continent = "South America"*/

/*2- SELECT city.Name, city.District, city.Population, country.Name FROM city 
INNER JOIN country 
ON city.CountryCode = country.Code
WHERE (country.Name = 'Argentina' OR country.Name = 'Chile' OR country.Name = 'Uruguay') AND (city.Name like 'M%' or city.Name like 'P%') 
ORDER BY city.Name DESC LIMIT 0,20*/

/*3- SELECT COUNT(DISTINCT Language) 
FROM countrylanguage*/


/*3bis SELECT Language, COUNT(*) AS Cantidad FROM countrylanguage
GROUP BY Language
ORDER BY Cantidad DESC LIMIT 0,10*/

/*4- SELECT SUM(Population) AS 'Poblacion Europea' 
FROM country 
WHERE Continent = 'Europe'*/

/*5- SELECT Continent, SUM(Population) AS Poblacion FROM country
GROUP BY Continent
ORDER BY Poblacion DESC LIMIT 1*/

/*6- SELECT city.Name, countrylanguage.Language FROM city
INNER JOIN countrylanguage
ON city.CountryCode = countrylanguage.CountryCode
WHERE city.Name = 'Guadalajara' AND countrylanguage.IsOfficial = true*/

/*7- INSERT INTO countrylanguage (CountryCode, Language, IsOfficial, Percentage) 
VALUES ('ARG', 'Cordobes', false, 2.0)*/

/*8- UPDATE country
SET Name='Islas Malvinas (ARG)'
WHERE Code = 'FLK'*/

/*9- DELETE FROM city 
WHERE Population < 500 AND District = ''*/



















