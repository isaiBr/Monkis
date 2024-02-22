package monkis.monkisBack.web.controller;

import monkis.monkisBack.domain.dto.FamiliarDto;
import monkis.monkisBack.domain.repository.PersonaDtoRepository;
import monkis.monkisBack.domain.service.FamiliarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/familiar")
public class FamiliarController {
    @Autowired
    private FamiliarService familiarService;
    @Autowired
    private PersonaDtoRepository personaService;

    @GetMapping("/todos")
    public ResponseEntity<List<FamiliarDto>> getAll(){
        return new ResponseEntity<>(familiarService.getAll(), HttpStatus.OK);
    }

    //@CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/principal/{idPrincipal}")
    public ResponseEntity<List<FamiliarDto>> getByPrincipal(@PathVariable("idPrincipal") int idPrincipal){
        return familiarService.getByPrincipal(idPrincipal)
                .map(familiares -> new ResponseEntity<>(familiares, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/guardar")
    public ResponseEntity<FamiliarDto> save(@RequestBody FamiliarDto familiarDto){
        return new ResponseEntity<>(familiarService.save(familiarDto), HttpStatus.CREATED);
    }

    @PostMapping("/actualizar")
    public ResponseEntity<FamiliarDto> update(@RequestBody FamiliarDto familiarDto){
        return new ResponseEntity<>(familiarService.update(familiarDto), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{idFamiliar}")
    public ResponseEntity eliminar(@PathVariable("idFamiliar") int idFamiliar){
        if(familiarService.deleteById(idFamiliar)){
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
