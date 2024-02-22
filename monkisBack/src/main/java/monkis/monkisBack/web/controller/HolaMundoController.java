package monkis.monkisBack.web.controller;

import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.persistence.entity.Familiar;
import monkis.monkisBack.persistence.entity.Persona;
import monkis.monkisBack.persistence.FamiliarRepository;
import monkis.monkisBack.persistence.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/saludar")
public class HolaMundoController {
    @GetMapping("/hola")
    public String saludar(){return "Probando un controlador desde 0";}

}
