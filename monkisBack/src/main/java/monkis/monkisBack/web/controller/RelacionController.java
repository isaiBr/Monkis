package monkis.monkisBack.web.controller;

import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.domain.dto.RelacionDto;
import monkis.monkisBack.domain.service.NacionalidadService;
import monkis.monkisBack.domain.service.RelacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/relacion")
public class RelacionController {

    @Autowired
    private RelacionService relacionService;

    @GetMapping("/todos")
    public ResponseEntity<List<RelacionDto>> getAll(){
        return new ResponseEntity<>(relacionService.getAll(), HttpStatus.OK);
    }
}
