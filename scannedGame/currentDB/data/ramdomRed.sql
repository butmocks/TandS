SELECT * 
FROM redgame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM redgame), 1)