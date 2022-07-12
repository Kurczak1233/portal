﻿using Files.Application.Commands;
using Files.Application.Queries;
using Files.Domain.FilesAggregate.Enums;
using Files.Domain.FilesAggregate.Requests;
using IBigDataPortal.Domain.UserMetadata;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IBigDataPortal.Controllers;


[ApiController]
[Route("[controller]")]
public class FilesController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IUser _user;
    public FilesController(IMediator mediator, IUser user)
    {
        _mediator = mediator;
        _user = user;
    }
    [Authorize]
    [HttpGet("Last/Item/{itemId}/Module/{moduleNumber}")]
    public async Task<IActionResult> GetLastUploadedFileFromServer(int itemId, FileModuleEnum moduleNumber)
    {
        var fileResult = await _mediator.Send(new GetFileQuery(itemId, moduleNumber));
        return Ok(fileResult);
    }
    
    [HttpGet("Item/{itemId}/Module/{moduleNumber}")]
    public async Task<IActionResult> GetAllItemsFiles(int itemId, FileModuleEnum moduleNumber)
    {
        var fileResult = await _mediator.Send(new GetAllFilesQuery(itemId, moduleNumber));
        return Ok(fileResult);
    }
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> UploadFileToServer([FromForm] UploadFileRequest body)
    {
        await _mediator.Send(new UploadFileCommand(body, _user.Id));
        return Ok();
    }
    [Authorize]
    [HttpPut("File/{fileId}")]
    public async Task<IActionResult> RemoveFile(string fileId)
    {
        await _mediator.Send(new DeleteFileCommand(fileId));
        return Ok();
    }

}