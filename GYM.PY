import random
import turtle

# Scherm instellen
screen = turtle.Screen()
screen.title("ZS Sport AI - Inlogpagina")
screen.setup(width=900, height=650)
screen.bgcolor("#08112a")
screen.tracer(0, 0)

# Turtle object
pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)
pen.penup()

background_turtle = turtle.Turtle()
background_turtle.hideturtle()
background_turtle.speed(0)
background_turtle.penup()

# Bewegende achtergrondcirkelpunten
glow_items = []
for _ in range(7):
    glow_items.append({
        "x": random.randint(-440, 440),
        "y": random.randint(-320, 320),
        "size": random.randint(70, 160),
        "dx": random.uniform(-0.9, 0.9),
        "dy": random.uniform(-0.35, 0.35),
        "color": random.choice(["#4dc4ff", "#74d8ff", "#8d6cff", "#55b1ff"]),
    })

# Functie om een rechthoek te tekenen
def draw_box(x, y, width, height, color):
    pen.penup()
    pen.goto(x, y)
    pen.pendown()
    pen.fillcolor(color)
    pen.begin_fill()

    for _ in range(2):
        pen.forward(width)
        pen.right(90)
        pen.forward(height)
        pen.right(90)

    pen.end_fill()

# Functie voor de moderne achtergrond
def draw_background():
    background_turtle.clear()
    for glow in glow_items:
        glow["x"] += glow["dx"]
        glow["y"] += glow["dy"]
        if glow["x"] < -520 or glow["x"] > 520:
            glow["dx"] *= -1
        if glow["y"] < -360 or glow["y"] > 360:
            glow["dy"] *= -1

        background_turtle.goto(glow["x"], glow["y"])
        background_turtle.dot(glow["size"], glow["color"])

    draw_accent_bands()
    draw_soft_grid()

# Accentbanden aan de zijkanten
def draw_accent_bands():
    background_turtle.color("#d4af37")
    background_turtle.width(10)
    for x in (-500, 500):
        background_turtle.penup()
        background_turtle.goto(x, -355)
        background_turtle.setheading(90)
        background_turtle.pendown()
        background_turtle.forward(730)
        background_turtle.penup()

# Soft grid voor een modern patroon
def draw_soft_grid():
    background_turtle.color("#0f264f")
    background_turtle.width(1)
    for y in range(-280, 340, 70):
        background_turtle.penup()
        background_turtle.goto(-520, y)
        background_turtle.pendown()
        background_turtle.forward(1040)
        background_turtle.penup()

    for x in range(-500, 560, 110):
        background_turtle.penup()
        background_turtle.goto(x, -360)
        background_turtle.setheading(90)
        background_turtle.pendown()
        background_turtle.forward(720)
        background_turtle.penup()

# Luxe foto-paneel
def draw_photo_panel():
    draw_box(175, 130, 260, 280, "#12213d")
    draw_box(180, 135, 250, 270, "#0f1b3f")
    draw_box(190, 60, 230, 160, "#15275e")
    draw_box(195, 65, 220, 150, "#0a1b38")

    pen.penup()
    pen.goto(195, 180)
    pen.color("#d4af37")
    pen.write("Sportfoto", font=("Times New Roman", 14, "bold"))
    pen.penup()
    pen.goto(195, 155)
    pen.color("#b7c8ff")
    pen.write("Elegante achtergrond", font=("Times New Roman", 11, "normal"))

    pen.color("#d4af37")
    for cx, cy, radius in ((260, 100, 18), (240, 120, 12), (310, 130, 12)):
        pen.penup()
        pen.goto(cx, cy - radius)
        pen.pendown()
        pen.circle(radius)
        pen.penup()

# Kleine detailpunten tekenen
def draw_detail_item(x, y, title, subtitle, color):
    pen.penup()
    pen.goto(x, y)
    pen.color(color)
    pen.write("•", font=("Segoe UI", 18, "bold"))
    pen.goto(x + 24, y)
    pen.color("#edf3ff")
    pen.write(title, font=("Segoe UI", 13, "bold"))
    pen.goto(x + 24, y - 20)
    pen.color("#b3c8ff")
    pen.write(subtitle, font=("Segoe UI", 11, "normal"))

# Tekent de login interface
def draw_interface():
    pen.clear()

    # Groot basisframe
    draw_box(-250, 170, 700, 350, "#0b173a")
    draw_box(-240, 160, 680, 330, "#0f214f")

    # Login kaart
    draw_box(-225, 130, 380, 280, "#102b61")
    draw_box(-215, 120, 360, 260, "#122654")

    # Luxe foto kaart
    draw_photo_panel()

    # Header
    pen.penup()
    pen.goto(-20, 235)
    pen.color("#f6d06d")
    pen.write("ZS SPORT AI", align="center", font=("Times New Roman", 32, "bold"))
    pen.goto(-20, 200)
    pen.color("#e1e8ff")
    pen.write("Luxe sportinlog met premium foto", align="center", font=("Times New Roman", 15, "normal"))

    # Subtekst badge
    draw_box(-215, 190, 120, 30, "#d4af37")
    pen.penup()
    pen.goto(-170, 196)
    pen.color("#08112a")
    pen.write("AI Coach Ready", font=("Times New Roman", 11, "bold"))

    # Gebruikersnaam veld
    pen.penup()
    pen.goto(-205, 150)
    pen.color("#e7eeff")
    pen.write("Gebruikersnaam", font=("Times New Roman", 14, "normal"))
    draw_box(-225, 120, 320, 42, "#0e3368")
    pen.penup()
    pen.goto(-205, 125)
    pen.color("#8db6ff")
    pen.write("jouw.naam", font=("Segoe UI", 12, "normal"))

    # Wachtwoord veld
    pen.penup()
    pen.goto(-205, 85)
    pen.color("#e7eeff")
    pen.write("Wachtwoord", font=("Times New Roman", 14, "normal"))
    draw_box(-225, 55, 320, 42, "#0e3368")
    pen.penup()
    pen.goto(-205, 60)
    pen.color("#8db6ff")
    pen.write("••••••••", font=("Times New Roman", 12, "normal"))

    # Login knop
    draw_box(-90, 0, 180, 50, "#d4af37")
    pen.penup()
    pen.goto(0, 8)
    pen.color("#08112a")
    pen.write("INLOGGEN", align="center", font=("Times New Roman", 16, "bold"))

    # Extra knoppen
    draw_box(-225, -70, 160, 32, "#102f63")
    pen.penup()
    pen.goto(-205, -67)
    pen.color("#8db6ff")
    pen.write("Wachtwoord vergeten", font=("Segoe UI", 10, "normal"))
    draw_box(40, -70, 160, 32, "#102f63")
    pen.penup()
    pen.goto(55, -67)
    pen.color("#8db6ff")
    pen.write("Nieuw account", font=("Segoe UI", 10, "normal"))

    # Info details
    draw_detail_item(185, 200, "Realtime analyse", "Maximale sportprestaties", "#72d3ff")
    draw_detail_item(185, 155, "Team tracking", "Volg je team vooruitgang", "#9cc6ff")
    draw_detail_item(185, 110, "Snel herstel", "Persoonlijke AI-aanbevelingen", "#c4baff")

    # Footer note
    pen.penup()
    pen.goto(-20, -115)
    pen.color("#a5bdec")
    pen.write("Strak design met moderne kleuren en letters.", align="center", font=("Segoe UI", 11, "normal"))

# Animatielus voor de achtergrond
def animate():
    draw_background()
    screen.update()
    screen.ontimer(animate, 45)

# Start
draw_interface()
screen.update()
animate()

screen.mainloop()