package monkis.monkisBack.web.controller;

import monkis.monkisBack.domain.dto.FamiliarDto;
import monkis.monkisBack.domain.dto.NacionalidadDto;
import monkis.monkisBack.domain.service.NacionalidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/nacionalidad")
public class NacionalidadController {
    @Autowired
    private NacionalidadService nacionalidadService;

    @GetMapping("/todos")
    public ResponseEntity<List<NacionalidadDto>> getAll(){
        return new ResponseEntity<>(nacionalidadService.getAll(), HttpStatus.OK);
    }
}
