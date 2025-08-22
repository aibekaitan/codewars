SELECT 
  flower1, 
  flower2, 
  CASE 
    WHEN (flower1 % 2) <> (flower2 % 2) THEN true
    ELSE false
  END AS res
FROM 
